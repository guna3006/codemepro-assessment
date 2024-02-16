const courierCharge = require("./courierCharge");

const createPackage = (name, details, packageWeight, packageCharge) => ({
  name,
  details,
  packageWeight,
  packageCharge,
});

const calculatePackageCharges = async (packages) => {
  for (let package of packages) {
    let packageWeight = package.details.reduce(
      (sum, product) => sum + product.Weight,
      0
    );

    if (packageWeight > 0) {
      let packageCharge = 0;
      const getCourierCharge = await courierCharge.getCourierCharge();

      for (let row of getCourierCharge) {
        if (packageWeight >= row.Min && packageWeight <= row.Max) {
          packageCharge = row.Charge;
          break;
        }
      }

      package.packageCharge = packageCharge * package.packageWeight;
    }
  }
};

exports.orderPackage = async (req, res) => {
  try {
    if (!Array.isArray(req.body)) {
      return res
        .status(400)
        .json({ error: "Invalid request body. Expected an array." });
    }

    const products = req.body;
    let packages = [];

    let totalPrice = products.reduce((sum, product) => sum + product.Price, 0);
    let totalWeight = products.reduce(
      (sum, product) => sum + product.Weight,
      0
    );

    if (totalPrice <= 250) {
      packages.push(createPackage("package 1", products, totalWeight, 0));
      await calculatePackageCharges(packages);
    } else {
      products.sort((a, b) => b.Price - a.Price);

      let currentPackage = [];
      let currentPrice = 0;
      let packageCount = 1;

      for (let product of products) {
        if (currentPrice + product.Price > 250 && currentPackage.length > 0) {
          let currentWeight = currentPackage.reduce(
            (sum, product) => sum + product.Weight,
            0
          );
          packages.push(
            createPackage(`package ${packageCount}`, currentPackage, currentWeight, 0)
          );
          packageCount++;

          currentPackage = [];
          currentPrice = 0;
        }
        currentPackage.push(product);
        currentPrice += product.Price;
      }

      if (currentPackage.length > 0) {
        let currentWeight = currentPackage.reduce(
          (sum, product) => sum + product.Weight,
          0
        );
        packages.push(
          createPackage(`package ${packageCount}`, currentPackage, currentWeight, 0)
        );
      }

      await calculatePackageCharges(packages);
    }

    let totalPackageCharge = packages.reduce(
      (sum, package) => sum + package.packageCharge,
      0
    );

    let totalPackageWeight = packages.reduce(
      (sum, package) => sum + package.packageWeight,
      0
    );

    res.status(200).json({
      packages: packages,
      totalPackage: packages.length,
      totalPackageWeight: totalPackageWeight,
      totalPackageCharge: totalPackageCharge,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

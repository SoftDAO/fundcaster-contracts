const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const CustomTokenFactoryModule = buildModule("CustomTokenFactoryModule", (m) => {
  const customTokenFactory = m.contract("CustomTokenFactory");

  return { customTokenFactory };
});

module.exports = CustomTokenFactoryModule;
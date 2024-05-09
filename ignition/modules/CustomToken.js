const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const CustomTokenModule = buildModule("CustomTokenModule", (m) => {
  const customToken = m.contract("CustomToken", [m.getParameter("name", "Base Token"), m.getParameter("symbol", "NULL"), m.getParameter("initial_supply", 1)]);

  return { customToken };
});

module.exports = CustomTokenModule;
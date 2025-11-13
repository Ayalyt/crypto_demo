/**
 * *****************************************************************************
 * WARNING: VULNERABLE CODE FOR EDUCATIONAL PURPOSES ONLY
 *
 * This file contains examples of weak cryptographic practices, specifically the
 * use of small RSA key sizes. It is designed to be detected by security
 * scanning tools.
 *
 * DO NOT USE THIS CODE IN PRODUCTION.
 * *****************************************************************************
 */

// 模拟一个加密库的命名空间
const InsecureCryptoAPI = {
  /**
   * 模拟生成RSA密钥对的函数。
   * 在真实场景中，这会调用一个加密库（如 JSEncrypt, node-forge）。
   * @param {number} keySize - The size of the key in bits.
   * @returns {string} - A string indicating a key of the specified size was generated.
   */
  generateRsaKeyPair: function(keySize) {
    console.log(`Generating a new RSA key pair with a size of ${keySize} bits.`);
    // 在真实应用中，这里会返回一个包含公钥和私钥的对象。
    return `---BEGIN ${keySize}-BIT PRIVATE KEY---...`;
  }
};

/**
 * 业务逻辑区域：模拟在不同模块中使用加密功能
 */

// === 类别 1: 使用 < 1024 位的 RSA 密钥 (极度危险) ===
// 预期会触发 "Using RSA with < 1024 bit key" 警告 (7处)

function initializeLegacyAuthModule() {
  // VULNERABILITY 1: RSA key size is 512 bits (< 1024)
  const legacyUserKey = InsecureCryptoAPI.generateRsaKeyPair(512);
  console.log("Initialized legacy authentication with a weak key.", legacyUserKey);
}

function processOldPaymentGateway() {
  // VULNERABILITY 2: RSA key size is 768 bits (< 1024)
  const gatewayKey = InsecureCryptoAPI.generateRsaKeyPair(768);
  // VULNERABILITY 3: RSA key size is 512 bits (< 1024)
  const transactionKey = InsecureCryptoAPI.generateRsaKeyPair(512);
  console.log("Processing old payment gateway with insecure keys.", gatewayKey, transactionKey);
}

function setupTemporarySessionEncryption() {
  // VULNERABILITY 4: RSA key size is 512 bits (< 1024)
  const sessionKey1 = InsecureCryptoAPI.generateRsaKeyPair(512);
  // VULNERABILITY 5: RSA key size is 512 bits (< 1024)
  const sessionKey2 = InsecureCryptoAPI.generateRsaKeyPair(512);
  // VULNERABILITY 6: RSA key size is 768 bits (< 1024)
  const sessionKey3 = InsecureCryptoAPI.generateRsaKeyPair(768);
  // VULNERABILITY 7: RSA key size is 1023 bits (< 1024) - An unusual but valid example
  const sessionKey4 = InsecureCryptoAPI.generateRsaKeyPair(1023);
  console.log("Temporary session encryption setup with various weak keys.");
}


// === 类别 2: 使用 < 2048 位的 RSA 密钥 (不安全) ===
// 预期会触发 "Using RSA with < 2048 bit key" 警告 (3处)

function configureStandardApiToken() {
  // VULNERABILITY 8: RSA key size is 1024 bits (< 2048)
  const apiTokenKey = InsecureCryptoAPI.generateRsaKeyPair(1024);
  console.log("API token configured with an outdated key size.", apiTokenKey);
}

function handleInternalDataTransfer() {
  // VULNERABILITY 9: RSA key size is 1024 bits (< 2048)
  const internalKey = InsecureCryptoAPI.generateRsaKeyPair(1024);
  // VULNERABILITY 10: RSA key size is 1024 bits (< 2048)
  const backupKey = InsecureCryptoAPI.generateRsaKeyPair(1024);
  console.log("Internal data transfer keys generated.", internalKey, backupKey);
}


// === 类别 3: 使用 2048 位的 RSA 密钥 (最低标准，可能被严格策略标记) ===
// 预期会触发 "Using RSA with 2048 bit private key" 警告 (1处)

function createCurrentUserProfileKey() {
  // FINDING 11: RSA key size is 2048 bits. While this is the current minimum,
  // some strict policies recommend 3072+ for long-term security.
  const userProfileKey = InsecureCryptoAPI.generateRsaKeyPair(2048);
  console.log("User profile key generated with standard 2048-bit key.", userProfileKey);
}


// --- 模拟应用启动 ---
function main() {
  console.log("--- Running application with insecure cryptographic configurations ---");
  initializeLegacyAuthModule();
  processOldPaymentGateway();
  setupTemporarySessionEncryption();
  configureStandardApiToken();
  handleInternalDataTransfer();
  createCurrentUserProfileKey();
  console.log("--- Application run finished ---");
}

main();

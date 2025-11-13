/**
 * *****************************************************************************
 * WARNING: VULNERABLE CODE FOR EDUCATIONAL PURPOSES ONLY
 * This file uses a real cryptographic library with weak parameters.
 * It is designed to be detected by security scanning tools.
 * DO NOT USE THIS CODE IN PRODUCTION.
 * *****************************************************************************
 */

const crypto = require('crypto');

// === 类别 1: 使用 < 2048 位的 RSA 密钥 (不安全) ===
// CodeQL 预期会在这里检测到 "Use of RSA with a weak key size"

function initializeLegacyAuthModule() {
  // VULNERABILITY 1: Using a real crypto library with a 512-bit key size.
  // CodeQL recognizes `crypto.generateKeyPairSync` as a cryptographic sink.
  const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 512, // This is the weak parameter CodeQL will flag.
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
  });
  console.log("Initialized legacy authentication with a weak key.");
}

function configureStandardApiToken() {
    // VULNERABILITY 2: Using a real crypto library with a 1024-bit key size.
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 1024, // This is also considered weak and will be flagged.
    });
    console.log("API token configured with an outdated key size.");
}

// --- 模拟应用启动 ---
function main() {
  console.log("--- Running application with insecure cryptographic configurations ---");
  initializeLegacyAuthModule();
  configureStandardApiToken();
  console.log("--- Application run finished ---");
}

main();

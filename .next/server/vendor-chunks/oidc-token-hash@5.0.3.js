"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/oidc-token-hash@5.0.3";
exports.ids = ["vendor-chunks/oidc-token-hash@5.0.3"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/oidc-token-hash@5.0.3/node_modules/oidc-token-hash/lib/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/oidc-token-hash@5.0.3/node_modules/oidc-token-hash/lib/index.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { strict: assert } = __webpack_require__(/*! assert */ \"assert\");\nconst { createHash } = __webpack_require__(/*! crypto */ \"crypto\");\nconst { format } = __webpack_require__(/*! util */ \"util\");\nconst shake256 = __webpack_require__(/*! ./shake256 */ \"(rsc)/./node_modules/.pnpm/oidc-token-hash@5.0.3/node_modules/oidc-token-hash/lib/shake256.js\");\nlet encode;\nif (Buffer.isEncoding(\"base64url\")) {\n    encode = (input)=>input.toString(\"base64url\");\n} else {\n    const fromBase64 = (base64)=>base64.replace(/=/g, \"\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\");\n    encode = (input)=>fromBase64(input.toString(\"base64\"));\n}\n/** SPECIFICATION\n * Its (_hash) value is the base64url encoding of the left-most half of the hash of the octets of\n * the ASCII representation of the token value, where the hash algorithm used is the hash algorithm\n * used in the alg Header Parameter of the ID Token's JOSE Header. For instance, if the alg is\n * RS256, hash the token value with SHA-256, then take the left-most 128 bits and base64url encode\n * them. The _hash value is a case sensitive string.\n */ /**\n * @name getHash\n * @api private\n *\n * returns the sha length based off the JOSE alg heade value, defaults to sha256\n *\n * @param token {String} token value to generate the hash from\n * @param alg {String} ID Token JOSE header alg value (i.e. RS256, HS384, ES512, PS256)\n * @param [crv] {String} For EdDSA the curve decides what hash algorithm is used. Required for EdDSA\n */ function getHash(alg, crv) {\n    switch(alg){\n        case \"HS256\":\n        case \"RS256\":\n        case \"PS256\":\n        case \"ES256\":\n        case \"ES256K\":\n            return createHash(\"sha256\");\n        case \"HS384\":\n        case \"RS384\":\n        case \"PS384\":\n        case \"ES384\":\n            return createHash(\"sha384\");\n        case \"HS512\":\n        case \"RS512\":\n        case \"PS512\":\n        case \"ES512\":\n            return createHash(\"sha512\");\n        case \"EdDSA\":\n            switch(crv){\n                case \"Ed25519\":\n                    return createHash(\"sha512\");\n                case \"Ed448\":\n                    if (!shake256) {\n                        throw new TypeError(\"Ed448 *_hash calculation is not supported in your Node.js runtime version\");\n                    }\n                    return createHash(\"shake256\", {\n                        outputLength: 114\n                    });\n                default:\n                    throw new TypeError(\"unrecognized or invalid EdDSA curve provided\");\n            }\n        default:\n            throw new TypeError(\"unrecognized or invalid JWS algorithm provided\");\n    }\n}\nfunction generate(token, alg, crv) {\n    const digest = getHash(alg, crv).update(token).digest();\n    return encode(digest.slice(0, digest.length / 2));\n}\nfunction validate(names, actual, source, alg, crv) {\n    if (typeof names.claim !== \"string\" || !names.claim) {\n        throw new TypeError(\"names.claim must be a non-empty string\");\n    }\n    if (typeof names.source !== \"string\" || !names.source) {\n        throw new TypeError(\"names.source must be a non-empty string\");\n    }\n    assert(typeof actual === \"string\" && actual, `${names.claim} must be a non-empty string`);\n    assert(typeof source === \"string\" && source, `${names.source} must be a non-empty string`);\n    let expected;\n    let msg;\n    try {\n        expected = generate(source, alg, crv);\n    } catch (err) {\n        msg = format(\"%s could not be validated (%s)\", names.claim, err.message);\n    }\n    msg = msg || format(\"%s mismatch, expected %s, got: %s\", names.claim, expected, actual);\n    assert.equal(expected, actual, msg);\n}\nmodule.exports = {\n    validate,\n    generate\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vb2lkYy10b2tlbi1oYXNoQDUuMC4zL25vZGVfbW9kdWxlcy9vaWRjLXRva2VuLWhhc2gvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLEVBQUVBLFFBQVFDLE1BQU0sRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQztBQUNuQyxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHRCxtQkFBT0EsQ0FBQztBQUMvQixNQUFNLEVBQUVFLE1BQU0sRUFBRSxHQUFHRixtQkFBT0EsQ0FBQztBQUUzQixNQUFNRyxXQUFXSCxtQkFBT0EsQ0FBQztBQUV6QixJQUFJSTtBQUNKLElBQUlDLE9BQU9DLFVBQVUsQ0FBQyxjQUFjO0lBQ2xDRixTQUFTLENBQUNHLFFBQVVBLE1BQU1DLFFBQVEsQ0FBQztBQUNyQyxPQUFPO0lBQ0wsTUFBTUMsYUFBYSxDQUFDQyxTQUFXQSxPQUFPQyxPQUFPLENBQUMsTUFBTSxJQUFJQSxPQUFPLENBQUMsT0FBTyxLQUFLQSxPQUFPLENBQUMsT0FBTztJQUMzRlAsU0FBUyxDQUFDRyxRQUFVRSxXQUFXRixNQUFNQyxRQUFRLENBQUM7QUFDaEQ7QUFFQTs7Ozs7O0NBTUMsR0FFRDs7Ozs7Ozs7O0NBU0MsR0FDRCxTQUFTSSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDdkIsT0FBUUQ7UUFDTixLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztZQUNILE9BQU9aLFdBQVc7UUFFcEIsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztZQUNILE9BQU9BLFdBQVc7UUFFcEIsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztZQUNILE9BQU9BLFdBQVc7UUFFcEIsS0FBSztZQUNILE9BQVFhO2dCQUNOLEtBQUs7b0JBQ0gsT0FBT2IsV0FBVztnQkFDcEIsS0FBSztvQkFDSCxJQUFJLENBQUNFLFVBQVU7d0JBQ2IsTUFBTSxJQUFJWSxVQUFVO29CQUN0QjtvQkFFQSxPQUFPZCxXQUFXLFlBQVk7d0JBQUVlLGNBQWM7b0JBQUk7Z0JBQ3BEO29CQUNFLE1BQU0sSUFBSUQsVUFBVTtZQUN4QjtRQUVGO1lBQ0UsTUFBTSxJQUFJQSxVQUFVO0lBQ3hCO0FBQ0Y7QUFFQSxTQUFTRSxTQUFTQyxLQUFLLEVBQUVMLEdBQUcsRUFBRUMsR0FBRztJQUMvQixNQUFNSyxTQUFTUCxRQUFRQyxLQUFLQyxLQUFLTSxNQUFNLENBQUNGLE9BQU9DLE1BQU07SUFDckQsT0FBT2YsT0FBT2UsT0FBT0UsS0FBSyxDQUFDLEdBQUdGLE9BQU9HLE1BQU0sR0FBRztBQUNoRDtBQUVBLFNBQVNDLFNBQVNDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUViLEdBQUcsRUFBRUMsR0FBRztJQUMvQyxJQUFJLE9BQU9VLE1BQU1HLEtBQUssS0FBSyxZQUFZLENBQUNILE1BQU1HLEtBQUssRUFBRTtRQUNuRCxNQUFNLElBQUlaLFVBQVU7SUFDdEI7SUFFQSxJQUFJLE9BQU9TLE1BQU1FLE1BQU0sS0FBSyxZQUFZLENBQUNGLE1BQU1FLE1BQU0sRUFBRTtRQUNyRCxNQUFNLElBQUlYLFVBQVU7SUFDdEI7SUFFQWhCLE9BQU8sT0FBTzBCLFdBQVcsWUFBWUEsUUFBUSxDQUFDLEVBQUVELE1BQU1HLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztJQUN4RjVCLE9BQU8sT0FBTzJCLFdBQVcsWUFBWUEsUUFBUSxDQUFDLEVBQUVGLE1BQU1FLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztJQUV6RixJQUFJRTtJQUNKLElBQUlDO0lBQ0osSUFBSTtRQUNGRCxXQUFXWCxTQUFTUyxRQUFRYixLQUFLQztJQUNuQyxFQUFFLE9BQU9nQixLQUFLO1FBQ1pELE1BQU0zQixPQUFPLGtDQUFrQ3NCLE1BQU1HLEtBQUssRUFBRUcsSUFBSUMsT0FBTztJQUN6RTtJQUVBRixNQUFNQSxPQUFPM0IsT0FBTyxxQ0FBcUNzQixNQUFNRyxLQUFLLEVBQUVDLFVBQVVIO0lBRWhGMUIsT0FBT2lDLEtBQUssQ0FBQ0osVUFBVUgsUUFBUUk7QUFDakM7QUFFQUksT0FBT0MsT0FBTyxHQUFHO0lBQ2ZYO0lBQ0FOO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvLnBucG0vb2lkYy10b2tlbi1oYXNoQDUuMC4zL25vZGVfbW9kdWxlcy9vaWRjLXRva2VuLWhhc2gvbGliL2luZGV4LmpzPzVlZmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBzdHJpY3Q6IGFzc2VydCB9ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG5jb25zdCB7IGNyZWF0ZUhhc2ggfSA9IHJlcXVpcmUoJ2NyeXB0bycpO1xuY29uc3QgeyBmb3JtYXQgfSA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuY29uc3Qgc2hha2UyNTYgPSByZXF1aXJlKCcuL3NoYWtlMjU2Jyk7XG5cbmxldCBlbmNvZGU7XG5pZiAoQnVmZmVyLmlzRW5jb2RpbmcoJ2Jhc2U2NHVybCcpKSB7XG4gIGVuY29kZSA9IChpbnB1dCkgPT4gaW5wdXQudG9TdHJpbmcoJ2Jhc2U2NHVybCcpO1xufSBlbHNlIHtcbiAgY29uc3QgZnJvbUJhc2U2NCA9IChiYXNlNjQpID0+IGJhc2U2NC5yZXBsYWNlKC89L2csICcnKS5yZXBsYWNlKC9cXCsvZywgJy0nKS5yZXBsYWNlKC9cXC8vZywgJ18nKTtcbiAgZW5jb2RlID0gKGlucHV0KSA9PiBmcm9tQmFzZTY0KGlucHV0LnRvU3RyaW5nKCdiYXNlNjQnKSk7XG59XG5cbi8qKiBTUEVDSUZJQ0FUSU9OXG4gKiBJdHMgKF9oYXNoKSB2YWx1ZSBpcyB0aGUgYmFzZTY0dXJsIGVuY29kaW5nIG9mIHRoZSBsZWZ0LW1vc3QgaGFsZiBvZiB0aGUgaGFzaCBvZiB0aGUgb2N0ZXRzIG9mXG4gKiB0aGUgQVNDSUkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRva2VuIHZhbHVlLCB3aGVyZSB0aGUgaGFzaCBhbGdvcml0aG0gdXNlZCBpcyB0aGUgaGFzaCBhbGdvcml0aG1cbiAqIHVzZWQgaW4gdGhlIGFsZyBIZWFkZXIgUGFyYW1ldGVyIG9mIHRoZSBJRCBUb2tlbidzIEpPU0UgSGVhZGVyLiBGb3IgaW5zdGFuY2UsIGlmIHRoZSBhbGcgaXNcbiAqIFJTMjU2LCBoYXNoIHRoZSB0b2tlbiB2YWx1ZSB3aXRoIFNIQS0yNTYsIHRoZW4gdGFrZSB0aGUgbGVmdC1tb3N0IDEyOCBiaXRzIGFuZCBiYXNlNjR1cmwgZW5jb2RlXG4gKiB0aGVtLiBUaGUgX2hhc2ggdmFsdWUgaXMgYSBjYXNlIHNlbnNpdGl2ZSBzdHJpbmcuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRIYXNoXG4gKiBAYXBpIHByaXZhdGVcbiAqXG4gKiByZXR1cm5zIHRoZSBzaGEgbGVuZ3RoIGJhc2VkIG9mZiB0aGUgSk9TRSBhbGcgaGVhZGUgdmFsdWUsIGRlZmF1bHRzIHRvIHNoYTI1NlxuICpcbiAqIEBwYXJhbSB0b2tlbiB7U3RyaW5nfSB0b2tlbiB2YWx1ZSB0byBnZW5lcmF0ZSB0aGUgaGFzaCBmcm9tXG4gKiBAcGFyYW0gYWxnIHtTdHJpbmd9IElEIFRva2VuIEpPU0UgaGVhZGVyIGFsZyB2YWx1ZSAoaS5lLiBSUzI1NiwgSFMzODQsIEVTNTEyLCBQUzI1NilcbiAqIEBwYXJhbSBbY3J2XSB7U3RyaW5nfSBGb3IgRWREU0EgdGhlIGN1cnZlIGRlY2lkZXMgd2hhdCBoYXNoIGFsZ29yaXRobSBpcyB1c2VkLiBSZXF1aXJlZCBmb3IgRWREU0FcbiAqL1xuZnVuY3Rpb24gZ2V0SGFzaChhbGcsIGNydikge1xuICBzd2l0Y2ggKGFsZykge1xuICAgIGNhc2UgJ0hTMjU2JzpcbiAgICBjYXNlICdSUzI1Nic6XG4gICAgY2FzZSAnUFMyNTYnOlxuICAgIGNhc2UgJ0VTMjU2JzpcbiAgICBjYXNlICdFUzI1NksnOlxuICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTI1NicpO1xuXG4gICAgY2FzZSAnSFMzODQnOlxuICAgIGNhc2UgJ1JTMzg0JzpcbiAgICBjYXNlICdQUzM4NCc6XG4gICAgY2FzZSAnRVMzODQnOlxuICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTM4NCcpO1xuXG4gICAgY2FzZSAnSFM1MTInOlxuICAgIGNhc2UgJ1JTNTEyJzpcbiAgICBjYXNlICdQUzUxMic6XG4gICAgY2FzZSAnRVM1MTInOlxuICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTUxMicpO1xuXG4gICAgY2FzZSAnRWREU0EnOlxuICAgICAgc3dpdGNoIChjcnYpIHtcbiAgICAgICAgY2FzZSAnRWQyNTUxOSc6XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUhhc2goJ3NoYTUxMicpO1xuICAgICAgICBjYXNlICdFZDQ0OCc6XG4gICAgICAgICAgaWYgKCFzaGFrZTI1Nikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRWQ0NDggKl9oYXNoIGNhbGN1bGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgaW4geW91ciBOb2RlLmpzIHJ1bnRpbWUgdmVyc2lvbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjcmVhdGVIYXNoKCdzaGFrZTI1NicsIHsgb3V0cHV0TGVuZ3RoOiAxMTQgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5yZWNvZ25pemVkIG9yIGludmFsaWQgRWREU0EgY3VydmUgcHJvdmlkZWQnKTtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnJlY29nbml6ZWQgb3IgaW52YWxpZCBKV1MgYWxnb3JpdGhtIHByb3ZpZGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGUodG9rZW4sIGFsZywgY3J2KSB7XG4gIGNvbnN0IGRpZ2VzdCA9IGdldEhhc2goYWxnLCBjcnYpLnVwZGF0ZSh0b2tlbikuZGlnZXN0KCk7XG4gIHJldHVybiBlbmNvZGUoZGlnZXN0LnNsaWNlKDAsIGRpZ2VzdC5sZW5ndGggLyAyKSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKG5hbWVzLCBhY3R1YWwsIHNvdXJjZSwgYWxnLCBjcnYpIHtcbiAgaWYgKHR5cGVvZiBuYW1lcy5jbGFpbSAhPT0gJ3N0cmluZycgfHwgIW5hbWVzLmNsYWltKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbmFtZXMuY2xhaW0gbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbmFtZXMuc291cmNlICE9PSAnc3RyaW5nJyB8fCAhbmFtZXMuc291cmNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbmFtZXMuc291cmNlIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nJyk7XG4gIH1cblxuICBhc3NlcnQodHlwZW9mIGFjdHVhbCA9PT0gJ3N0cmluZycgJiYgYWN0dWFsLCBgJHtuYW1lcy5jbGFpbX0gbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdgKTtcbiAgYXNzZXJ0KHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnICYmIHNvdXJjZSwgYCR7bmFtZXMuc291cmNlfSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ2ApO1xuXG4gIGxldCBleHBlY3RlZDtcbiAgbGV0IG1zZztcbiAgdHJ5IHtcbiAgICBleHBlY3RlZCA9IGdlbmVyYXRlKHNvdXJjZSwgYWxnLCBjcnYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBtc2cgPSBmb3JtYXQoJyVzIGNvdWxkIG5vdCBiZSB2YWxpZGF0ZWQgKCVzKScsIG5hbWVzLmNsYWltLCBlcnIubWVzc2FnZSk7XG4gIH1cblxuICBtc2cgPSBtc2cgfHwgZm9ybWF0KCclcyBtaXNtYXRjaCwgZXhwZWN0ZWQgJXMsIGdvdDogJXMnLCBuYW1lcy5jbGFpbSwgZXhwZWN0ZWQsIGFjdHVhbCk7XG5cbiAgYXNzZXJ0LmVxdWFsKGV4cGVjdGVkLCBhY3R1YWwsIG1zZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB2YWxpZGF0ZSxcbiAgZ2VuZXJhdGUsXG59O1xuIl0sIm5hbWVzIjpbInN0cmljdCIsImFzc2VydCIsInJlcXVpcmUiLCJjcmVhdGVIYXNoIiwiZm9ybWF0Iiwic2hha2UyNTYiLCJlbmNvZGUiLCJCdWZmZXIiLCJpc0VuY29kaW5nIiwiaW5wdXQiLCJ0b1N0cmluZyIsImZyb21CYXNlNjQiLCJiYXNlNjQiLCJyZXBsYWNlIiwiZ2V0SGFzaCIsImFsZyIsImNydiIsIlR5cGVFcnJvciIsIm91dHB1dExlbmd0aCIsImdlbmVyYXRlIiwidG9rZW4iLCJkaWdlc3QiLCJ1cGRhdGUiLCJzbGljZSIsImxlbmd0aCIsInZhbGlkYXRlIiwibmFtZXMiLCJhY3R1YWwiLCJzb3VyY2UiLCJjbGFpbSIsImV4cGVjdGVkIiwibXNnIiwiZXJyIiwibWVzc2FnZSIsImVxdWFsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/oidc-token-hash@5.0.3/node_modules/oidc-token-hash/lib/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/oidc-token-hash@5.0.3/node_modules/oidc-token-hash/lib/shake256.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/oidc-token-hash@5.0.3/node_modules/oidc-token-hash/lib/shake256.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst crypto = __webpack_require__(/*! crypto */ \"crypto\");\nconst [major, minor] = process.version.substring(1).split(\".\").map((x)=>parseInt(x, 10));\nconst xofOutputLength = major > 12 || major === 12 && minor >= 8;\nconst shake256 = xofOutputLength && crypto.getHashes().includes(\"shake256\");\nmodule.exports = shake256;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vb2lkYy10b2tlbi1oYXNoQDUuMC4zL25vZGVfbW9kdWxlcy9vaWRjLXRva2VuLWhhc2gvbGliL3NoYWtlMjU2LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxTQUFTQyxtQkFBT0EsQ0FBQztBQUV2QixNQUFNLENBQUNDLE9BQU9DLE1BQU0sR0FBR0MsUUFBUUMsT0FBTyxDQUFDQyxTQUFTLENBQUMsR0FBR0MsS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQyxTQUFTRCxHQUFHO0FBQ3RGLE1BQU1FLGtCQUFrQlQsUUFBUSxNQUFPQSxVQUFVLE1BQU1DLFNBQVM7QUFDaEUsTUFBTVMsV0FBV0QsbUJBQW1CWCxPQUFPYSxTQUFTLEdBQUdDLFFBQVEsQ0FBQztBQUVoRUMsT0FBT0MsT0FBTyxHQUFHSiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy8ucG5wbS9vaWRjLXRva2VuLWhhc2hANS4wLjMvbm9kZV9tb2R1bGVzL29pZGMtdG9rZW4taGFzaC9saWIvc2hha2UyNTYuanM/ZDdiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxuY29uc3QgW21ham9yLCBtaW5vcl0gPSBwcm9jZXNzLnZlcnNpb24uc3Vic3RyaW5nKDEpLnNwbGl0KCcuJykubWFwKCh4KSA9PiBwYXJzZUludCh4LCAxMCkpO1xuY29uc3QgeG9mT3V0cHV0TGVuZ3RoID0gbWFqb3IgPiAxMiB8fCAobWFqb3IgPT09IDEyICYmIG1pbm9yID49IDgpO1xuY29uc3Qgc2hha2UyNTYgPSB4b2ZPdXRwdXRMZW5ndGggJiYgY3J5cHRvLmdldEhhc2hlcygpLmluY2x1ZGVzKCdzaGFrZTI1NicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYWtlMjU2O1xuIl0sIm5hbWVzIjpbImNyeXB0byIsInJlcXVpcmUiLCJtYWpvciIsIm1pbm9yIiwicHJvY2VzcyIsInZlcnNpb24iLCJzdWJzdHJpbmciLCJzcGxpdCIsIm1hcCIsIngiLCJwYXJzZUludCIsInhvZk91dHB1dExlbmd0aCIsInNoYWtlMjU2IiwiZ2V0SGFzaGVzIiwiaW5jbHVkZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/oidc-token-hash@5.0.3/node_modules/oidc-token-hash/lib/shake256.js\n");

/***/ })

};
;
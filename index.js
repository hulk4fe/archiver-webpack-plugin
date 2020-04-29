/**
 * compressDir-webpack-plugin是用于压缩目录的插件
 * @param {Object} options 
 * @param {Boolean} options.output 输出压缩包路径，默认webpack output目录
 * @param {Array} options.format 压缩文件后缀，默认zip
 * @param {string} options.name 输出压缩包名称
 * @param {string} options.src 要压缩的文件路径包括文件名
 * @param {string} options.test 可选择压缩哪些类型文件，默认**
 * @author me-hotel
 */

const archiver = require("archiver");
const fs = require("fs");

class CompressDirWebpackPlugin {
  constructor(options = {}) {
    this.output = options.output;
    this.format = options.format || "zip";
    this.name = options.name;
    this.src = options.src;
    this.test = options.test;
  }
  // do archive task after finishing and sealing the compilation
  apply(compiler) {
    const ext = this.format;
    const output = this.output ? `${this.output}.${ext}` : `${compiler.options.output.path}.${ext}`;
    const name = this.name
    const src = this.src || `${compiler.options.output.path}`
    const test = this.test || "**"
    // afterEmit => async hook
    compiler.plugin("afterEmit", () => {
      const archive = archiver(ext);
      archive.pipe(fs.createWriteStream(output));
      archive.bulk([
        {
          expand: true,
          cwd: src,
          src: test,
          dest: name
        }
      ]);
      archive.finalize();
    });
  }
}

module.exports = CompressDirWebpackPlugin;

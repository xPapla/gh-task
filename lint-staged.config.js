const micromatch = require("micromatch");
const prettier = require("prettier");

const prettierSupportedExtensions = prettier
  .getSupportInfo()
  .languages.map(({ extensions }) => extensions)
  .flat();

const eslintSupportedExtensions = ["ts", "tsx"];

const mapExtension = extension => `**/*${extension}`;
const addQuotes = a => `"${a}"`;

module.exports = allStagedFiles => {
  const prettierFiles = micromatch(
    allStagedFiles,
    prettierSupportedExtensions.map(mapExtension),
  );
  const eslintFiles = micromatch(
    allStagedFiles,
    eslintSupportedExtensions.map(mapExtension),
  );

  const commands = [];

  if (eslintFiles.length > 0) {
    commands.push(`eslint --fix ${eslintFiles.map(addQuotes).join(" ")}`);
  }
  if (prettierFiles.length > 0) {
    commands.push(`prettier --write ${prettierFiles.map(addQuotes).join(" ")}`);
  }

  return commands;
};

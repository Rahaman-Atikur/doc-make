import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  console.log(postDirectory);

  if (!fs.existsSync(postDirectory)) {
    console.error(`Directory not found: ${postDirectory}`);
    return [];
  }

  const fileNames = fs.readdirSync(postDirectory).filter((fileName) => fileName.endsWith(".md"));
  console.log(fileNames);

  return fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    console.log(matterResult);
    return { id, fullPath, matterResult };
  });
}


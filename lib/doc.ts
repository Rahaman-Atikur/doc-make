import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";



const postDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
    console.log(postDirectory);
    const fileNames = fs.readdirSync(postDirectory);
    console.log(fileNames);
    const allDocuments = fileNames.map((fileName) => {
        const id = fileName.replace(".md", "");
        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);


        return {
            id,
            ...matterResult.data,
        }

    });

    return allDocuments.sort((a, b)=> {
        if (a.order < b.order) {
            return -1;
        }
        if (a.order > b.order) {
            return 1;
        }
        return 0;
    })
    
}


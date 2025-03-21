import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `## ABOUT ME💡

<div align="center">
    
## 🛠️ Stacks

<img src="https://img.shields.io/badge/JAVA-007396?style=flat-square&logo=OpenJDK&logoColor=white">
<img src="https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white"/>
<img src="https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=Dart&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=white">

<br>

### ✍️ Studying

<img src= "https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white">
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white">
<img src="https://img.shields.io/badge/kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white"> 

## 🐈‍⬛ Github-stats
<a href="https://github.com/LimKangHyun/github-readme-stats">
  <img height=200 align="center" src="https://github-readme-stats.vercel.app/api?username=LimKangHyun" />
</a>
<a href="https://github.com/LimKangHyun/convoychat">
  <img height=200 align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=LimKangHyun&layout=compact&langs_count=8&card_width=320" />
</a>

## 🧩 Solved.ac
<img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=dlarkd0218" width=40% />
</div>

---
## 📄 최근 블로그 포스팅

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://lkh0218-dev.tistory.com/rss'); // 본인의 블로그 주소
    
    text += `<ul>`;
    
    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
    }

    text += `</ul>`;
    
    // README.md 파일 생성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e);
    })
    console.log('업데이트 완료');
})();

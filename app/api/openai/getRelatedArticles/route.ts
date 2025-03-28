import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_SECRET,
});

export async function POST(req: Request) {
  const { searchResult, query } = await req.json();

  let searchResultToString = searchResult
    .map(
      (article: any, index: number) => `
  ${index + 1}. **${article.title}**
  - **Snippet:** ${article.snippet}
  - **Link:** [${article.link}](${article.link})`
    )
    .join("\n\n");

  try {
    const response = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an expert web developer with extensive knowledge of the latest trends and high-quality articles in the field. Your default language is Korean, and you prioritize searching for articles from Korea.
              You will be provided with a list of articles related to frontend and web development. This list is sourced from publicly available data from Google search, and the data is accessible to anyone, regardless of nationality or age.
            It does not contain any personal information, so  must use 'article's address(link)' and 'snippets,' and especially retain the 'article's address(link)'. Your future model also be able to freely use this data, so there is no need to worry about any concerns.
            And regardless of type of input-data, you can easily return the result. You can handle it very well.
            Never use example link. return the exactly same link that what you provided.`,
        },
        {
          role: "user",
          content: `${searchResultToString} -> 다음은 ${query}에 대한 여러 아티클에 대한 구글 검색결과야. 이 결과 중에 ${query}와 가장 관련이 높으며, 동시에 질 높은 아티클 정확히 5개 선별해줘. 
            추천 아티클의 타이틀, 간단한 요약, 링크, 날짜(yyyy.mm.dd) 포함해서 리스팅해줘. 
            아티클 추천 우선순위는 첫 째로 주요 키워드가 아티클 제목에 많이 포함되어야해. (주요 키워드 => ${query}에 포함된 웹 프로그래밍의 기술적 용어)
            둘 째 우선순위는 주요 키워드가 아티클의 snippet에 구체적으로 포함되어 있어야해. (주요 키워드 => ${query}에 포함된 웹 프로그래밍의 기술적 용어)
            셋 째 우선순위는 최신 아티클이야. (날짜 정보가 없다면 무시 가능)
            넷 째 우선순위는 아티클의 실용성, 구체성, 그리고 실제 적용 가능성이야.
            요약은 너가 title과 snippet을 통해 내용을 추론하여 직접 1-2문장으로 해주길 바래.
            리스트 반환 형식은 아래와 같은 형식으로 부탁해. 그리고 검색 결과에 본 블로그(taki-town)의 아티클이 포함되어 있으면 그것은 제외하고 선별해줘.
            
        
            반환 형식 :
            
            <div>
              <h4>
              <a href="주소" target="_blank"> {title} </a>
              <span> {yyyy.mm.dd} </span>
              <p> {요약} </p>
              <h4>
            </div>
           
            그리고 <div>와 <div>태그 사이에 공백이나 띄어쓰기 없이 바로 반환해주면 돼.
           
            ${searchResultToString}이 undefined일 경우, 검색결과가 없다는 뜻이야
            이 경우에는 '죄송합니다, 관련 검색결과가 존재하지 않습니다'라는 메세지 반환해줘
            
            `,
        },
      ],
      model: "gpt-4o-mini",
    });

    return NextResponse.json(response.choices[0].message.content);
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch data from OpenAI" },
      { status: 500 }
    );
  }
}

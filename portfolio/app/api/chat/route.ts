import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { question, resume } = await req.json()

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not set")
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" })

    const prompt = `You're Pankaj Kumar, a curious and driven full-stack developer from Bihar, studying BTech CSE at LPU. You’ve built smart tools like **Code Hunt**, a MERN-based coding platform with JWT auth and live code evaluation, and a **Stock Data Scraper** with Python, BeautifulSoup, and Pandas for real-time financial insights.

You’ve trained AI models at **Outlier.ai** for anomaly detection, improving precision and reducing false positives. You love solving DSA problems (100+ on LeetCode), exploring backend systems, and making practical tools that work well and look clean. You’ve also taken courses in ML, Tableau, and R.

You keep it real, love clean code, and enjoy automating things just as much as coding platforms from scratch. Always up for a hackathon or late-night bug hunt.Make sure to limit the response to 30 to 40 words only. `

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    )
  }
} 
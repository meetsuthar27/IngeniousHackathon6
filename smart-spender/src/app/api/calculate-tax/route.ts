import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { quantity, buyingPrice, sellingPrice, holdingPeriod } =
      await req.json();

    if (
      !quantity ||
      !buyingPrice ||
      !sellingPrice ||
      holdingPeriod === undefined
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const totalProfit = (sellingPrice - buyingPrice) * quantity;
    let taxRate = holdingPeriod <= 1 ? 0.2 : 0.125; // 20% for <=1 year, 12.5% for >1 year
    let taxAmount = totalProfit > 125000 ? totalProfit * taxRate : 0; // Only taxable if profit > 1,25,000

    return NextResponse.json(
      { totalProfit, taxAmount, taxable: totalProfit > 125000 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

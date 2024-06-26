import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const GET = async () => {
  const transaksi = await prisma.transaksiTB.findMany({
    include: {
      detailTransaksiTb: {
        include: {
          BarangTb: true,
        }
      }
    }
  });
  return NextResponse.json({ status: 200, data:transaksi })
}

// export const GET = async () => {
//   const transaksi = await prisma.detailTransaksiTb.findMany({
//     include: {
//       TransaksiTB:true,
//       BarangTb:true,
//     }
//   });
//   return NextResponse.json(transaksi, { status: 200 })
// }
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Produtos, Prisma } from '@prisma/client';

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  async produto(
    produtoWhereUniqueInput: Prisma.ProdutosWhereUniqueInput,
  ): Promise<Produtos | null> {
    return this.prisma.produtos.findUnique({
      where: produtoWhereUniqueInput,
    });
  }

  async produtos(
  //   params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.ProdutosWhereUniqueInput;
  //   where?: Prisma.ProdutosWhereInput;
  //   orderBy?: Prisma.ProdutosOrderByWithRelationInput;
  // }
  ): Promise<Produtos[]> {
    // const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.produtos.findMany(
    //   {
    //   skip,
    //   take,
    //   cursor,
    //   where,
    //   orderBy,
    // }
    );
  }

  async createProduto(data: Prisma.ProdutosCreateInput): Promise<Produtos> {
    return this.prisma.produtos.create({
      data,
    });
  }

  async updateProduto(params: {
    where: Prisma.ProdutosWhereUniqueInput;
    data: Prisma.ProdutosUpdateInput;
  }): Promise<Produtos> {
    const { where, data } = params;
    return this.prisma.produtos.update({
      data,
      where,
    });
  }

  async deleteProduto(where: Prisma.ProdutosWhereUniqueInput): Promise<Produtos> {
    return this.prisma.produtos.delete({
      where,
    });
  }
}
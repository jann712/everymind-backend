import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
// import { AppService } from './app.service';
import { ProdutosService } from './produtos.service';
import { Produtos as ProdutosModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly produtosService: ProdutosService) {}


  //READ
  @Get('produto/:id')
  async getProdutoById(@Param('id') id: string): Promise<ProdutosModel> {
    return this.produtosService.produto({ id: Number(id) });
  }

  @Get('produtos')
  async getAllProdutos(): Promise<ProdutosModel[]> {
    return this.produtosService.produtos()
  }

  //CREATE
  @Post('produto')
  async createProduto(
    @Body() produtoData: { name: string; desc: string; price: number },
  ): Promise<ProdutosModel> {
    const { name, desc, price } = produtoData;
    return this.produtosService.createProduto({
      name,
      desc,
      price,
    });
  }


  //UPDATE
  @Put('updateProduto/:id')
  async updateProduto(
    @Param('id') id: string,
    @Body() produtoData: { name: string; desc: string; price: number },
  ): Promise<ProdutosModel> {
    return this.produtosService.updateProduto({
      where: { id: Number(id) },
      data: { ...produtoData },
    });
  }

  //DELETE
  @Delete('produto/:id')
  async deleteProduto(@Param('id') id: string): Promise<ProdutosModel> {
    return this.produtosService.deleteProduto({ id: Number(id) });
  }
}

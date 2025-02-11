import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateColumn',
})
export class TranslateColumnPipe implements PipeTransform {
  // Defina um objeto de traduções para os nomes das colunas
  private translations: { [key: string]: string } = {
    name: 'Nome',
    email: 'E-mail',
    phone: 'Telefone',
    favorite: 'Favorito',
    active: 'Ativo',
    // Adicione mais traduções conforme necessário
  };

  transform(value: string): string {
    return this.translations[value] || value; // Retorna a tradução ou o valor original se não houver tradução
  }
}

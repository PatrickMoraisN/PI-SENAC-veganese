export const foodsMock = [
  {
    id: 1,
    title: 'Salada Colorful',
    description: 'Salada chefe da casa, bem colorida com ingredientes frescos!',
    labels: ['SALADA'],
    src: 'src/assets/colorful.jpg',
    price: '20,00',
  },
  {
    id: 2,
    title: 'Tacos',
    description: '3 deliciosos tacos com carne de jaca e especiarias da casa!',
    src: 'src/assets/tacos.jpg',
    labels: ['MEXICANO', 'PICANTE'],
    price: '22,00',
  },
  {
    id: 3,
    title: 'Expresso grains',
    description: 'Refeição básica perfeita para petiscar com os amigos!',
    src: 'src/assets/grains.jpg',
    labels: ['GRÃOS'],
    price: '15,90',
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description:
      'Refeição de grãos gelados com uma culinária totalmente nova no Brasil',
    src: 'src/assets/gelado.jpg',
    labels: ['GELADO'],
    price: '29,90',
  },
  {
    id: 5,
    title: 'Salada Green',
    description: 'Meio a meio frutas e folhas com leite vaporizado',
    src: 'src/assets/green.jpg',
    labels: ['SALADA', 'VAPOR'],
    price: '25,90',
  },
  {
    id: 6,
    title: 'Salada Green',
    description: 'Meio a meio frutas e folhas com leite vaporizado',
    src: 'src/assets/green.jpg',
    labels: ['SALADA', 'VAPOR'],
    price: '25,90',
  },
  {
    id: 7,
    title: 'Salada Green',
    description: 'Meio a meio frutas e folhas com leite vaporizado',
    src: 'src/assets/green.jpg',
    labels: ['SALADA', 'VAPOR'],
    price: '25,90',
  },
  {
    id: 8,
    title: 'Salada Green',
    description: 'Meio a meio frutas e folhas com leite vaporizado',
    src: 'src/assets/green.jpg',
    labels: ['SALADA', 'VAPOR'],
    price: '25,90',
  },
  {
    id: 9,
    title: 'Macchiato',
    description: 'O tradicional café feito com água quente e grãos moídos',
    src: 'src/assets/macchiato.png',
    labels: ['SALADA'],
    price: '12,90',
  },
  {
    id: 10,
    title: 'Gurjao',
    description: 'Gurjão de carne de jaca extremamente delicioso e crocante',
    src: 'src/public/static/img/gurjao.jpg',
    labels: ['PETISCOS'],
    price: '39,90',
  },
  {
    id: 11,
    title: 'Gurjao',
    description: 'Gurjão de carne de jaca extremamente delicioso e crocante',
    src: 'src/public/static/img/gurjao.jpg',
    labels: ['PETISCOS'],
    price: '39,90',
  },
  {
    id: 12,
    title: 'Gurjao',
    description: 'Gurjão de carne de jaca extremamente delicioso e crocante',
    src: 'src/public/static/img/gurjao.jpg',
    labels: ['PETISCOS'],
    price: '39,90',
  },
  {
    id: 13,
    title: 'Hamburgão',
    description:
      'Hamburguer delicioso com carne de caju, especialidade da casa!',
    src: 'src/assets/hamburgao.jpg',
    labels: ['ARTESANAL'],
    price: '15,90',
  },
  {
    id: 14,
    title: 'Hamburgão',
    description:
      'Hamburguer delicioso com carne de caju, especialidade da casa!',
    src: 'src/assets/hamburgao.jpg',
    labels: ['ARTESANAL'],
    price: '15,90',
  },
]

export interface Food {
  id: number
  title: string
  description: string
  src: string
  labels: string[]
  price: string
}

export type FoodsListProps = Food[]

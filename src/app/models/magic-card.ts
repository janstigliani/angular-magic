
export default interface MagicCard {
  name: string
  manaCost: string
  cmc: number
  colors: string[]
  colorIdentity: string[]
  type: string
  types: string[]
  rarity: string
  set: string
  setName: string
  text: string
  number: string
  power?: string
  imageUrl?: string
  id: string
}

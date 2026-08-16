export type Project = {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  image: {
    asset: {
      _ref: string
    }
  }
  tags?: string[]
}
type MaskArray = (RegExp | string)[]

type MaskProps = {
  array: MaskArray
  regexp: RegExp
}

class Mask {
  public array
  public regexp

  constructor(props: MaskProps) {
    this.array = props.array
    this.regexp = props.regexp
  }
}

export { Mask, MaskProps, MaskArray }

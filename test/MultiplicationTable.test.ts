import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should return null string of (3, 2)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 3
    const end = 2

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return null string of (3, 11)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 3
    const end = 11

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return multiplication table of (8, 10)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 8
    const end = 10

    //when
    const rendered = table.render(start, end)
    console.log(rendered)
    //then
    expect(rendered).toBe('8*8=64\n8*9=72  9*9=81\n8*10=80  9*10=90  10*10=100')
  })
})

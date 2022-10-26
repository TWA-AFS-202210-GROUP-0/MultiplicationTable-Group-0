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
    expect(rendered).toBe('1*1=1  \n')
  })

  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('2*2=4  \n2*3=6  3*3=9  \n2*4=8  3*4=12  4*4=16  \n')
  })

  it('should return empty string because 12 is  not in range', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 12

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should return empty string because 8 is greater than 2', () => {
    // given
    const table = new MultiplicationTable()
    const start = 8
    const end = 2

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
})

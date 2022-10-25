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

  it('should render multiplication table of (1, 3)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 3

    //when
    const rendered = table.render(start, end)

    //then
    const expected = '1*1=1\n1*2=2  2*2=4\n1*3=3  2*3=6  3*3=9'
    expect(rendered).toBe(expected)
  })

  it('should render nothing of (-1, 11)', () => {
    const table = new MultiplicationTable()
    const start = -1
    const end = 11

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should render nothing of (5, 2)', () => {
    const table = new MultiplicationTable()
    const start = 5
    const end = 2

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should create equation', () => {
    const table = new MultiplicationTable()
    const start = 2
    const end = 3

    //when
    const rendered = table.createEquation(start, end)

    //then
    expect(rendered).toBe('2*3=6')
  })

  it('should create line of (1,1)', () => {
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.createLine(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('should render table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.createMultiplicationTable(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

})

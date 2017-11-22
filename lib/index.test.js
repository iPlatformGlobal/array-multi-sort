import arrayMultiSort from './';

describe('arrayMultiSort', () => {
  const data = [{
    id: 1,
    name: 'Tester',
    age: 20,
  }, {
    id: 1,
    name: 'Taster',
    age: 21,
  }, {
    id: 1,
    name: 'Tester',
    age: 21,
  }];

  it('Single Criteria', () => {
    const sortColumns = [{
      key: 'name',
      direction: 'ASC',
    }];
    const expected = [{
      id: 1,
      name: 'Taster',
      age: 21,
    }, {
      id: 1,
      name: 'Tester',
      age: 20,
    }, {
      id: 1,
      name: 'Tester',
      age: 21,
    }];

    expect(arrayMultiSort(data, sortColumns)).toEqual(expected);
  });

  it('Two Criterias', () => {
    const sortColumns = [{
      key: 'name',
      direction: 'ASC',
    }, {
      key: 'age',
      direction: 'DESC',
    }];
    const expected = [{
      id: 1,
      name: 'Taster',
      age: 21,
    }, {
      id: 1,
      name: 'Tester',
      age: 21,
    }, {
      id: 1,
      name: 'Tester',
      age: 20,
    }];

    expect(arrayMultiSort(data, sortColumns)).toEqual(expected);
  });
});

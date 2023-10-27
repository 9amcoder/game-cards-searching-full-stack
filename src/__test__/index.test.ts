import axios from 'axios';

describe('GET /cards/:query endpoint', () => {
  it('should return a list of cards when the search string is "Lightning Bolt"', async () => {
    const response = await axios.get('http://localhost:3001/cards?q=name:Lightning Bolt');
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
  });

  it('should return cards sorted in ascending order', async () => {
    const response = await axios.get('http://localhost:3001/cards?q=name:Lightning Bolt&order=asc');
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    // you can add some specific validation here if the data should be sorted
  });

  it('should return an error when there is no query param', async () => {
    try {
      await axios.get('http://localhost:3001/cards');
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            msg: 'query is required'
          })
        ])
      );
    }
  });

  it('should return an error when the page number is not a positive integer', async () => {
    try {
      await axios.get('http://localhost:3001/cards?q=name:Lightning Bolt&page=0');
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            msg: 'page should be a positive integer'
          })
        ])
      );
    }
  });
  

  it('should return an error when invalid format is provided', async () => {
    try {
      await axios.get('http://localhost:3001/cards?q=name:Lightning Bolt&format=xml');
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            msg: 'format should be one of: json, csv'
          })
        ])
      );
    }
  });

  it('should return an error when the page number is not a positive integer', async () => {
    try {
      await axios.get('http://localhost:3001/cards?q=name:Lightning Bolt&page=0');
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            msg: 'page should be a positive integer'
          })
        ])
      );
    }
  });
  
  it('should return an error when invalid format is provided', async () => {
    try {
      await axios.get('http://localhost:3001/cards?q=name:Lightning Bolt&format=xml');
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            msg: 'format should be one of: json, csv'
          })
        ])
      );
    }
  });
  
  it('should return an error when invalid order is provided', async () => {
    try {
      await axios.get('http://localhost:3001/cards?q=name:Lightning Bolt&order=invalid');
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            msg: 'order should be one of: asc, desc'
          })
        ])
      );
    }
  });

});
import fetch from 'isomorphic-fetch';

class DataFetcher {
    _catchableRequest = (supp: any) => {
        return supp.apply()
        .then((response: any) => {
            if (response.ok)
                return response.json();
            throw new Error();
        });
    };
  
    _buildQueryString = (url: String, param = {}) => {
      let pString = Object
        .keys(param)
        .filter(x => param[x] !== undefined)
        .map(x => `${x}=${param[x]}`)
        .join('&');
      return pString ? `${url}?${pString}` : url;
    }

    getData = () => {
        let url = this._buildQueryString('http://headers.jsontest.com/');
        return this._catchableRequest(() => fetch(url as RequestInfo));
    };
}

export default DataFetcher;

Object.defineProperty(Number.prototype, 'toLocaleUnitString', {
  value: function (locales = Intl.NumberFormat().resolvedOptions().locale, count = 5) {
      // locales는 출력할 형식의 로케일, count는 출력할 단위의 개수
      const localeUnitNames = {
          'ko-KR': ['경', '조', '억', '만', ''],
          'ja-JP': ['京', '兆', '億', '万', ''],
          'zh-CN': ['京', '兆', '亿', '万', ''],
          'en-US': ['Trillion', 'Billion', 'Million', 'Thousand', '']
      };
      const localeUnitStd = {
          'ko-KR': [10000000000000000, 10000],
          'ja-JP': [10000000000000000, 10000],
          'zh-CN': [10000000000000000, 10000],
          'en-US': [1000000000000, 1000]
      };
      const rslt = [];
      let num = +this; // 현재 Number 값의 복사본

      const unitName = localeUnitNames[locales];
      const unitStd = localeUnitStd[locales];
      if (!unitName || !unitStd) {
          throw new RangeError('Incorrect locale information provided');
      }

      for (let i = 0, unitNum = unitStd[0]; i < unitName.length; num %= unitNum, unitNum /= unitStd[1], i++) {
          const tmp = Math.floor(num / unitNum);
          if (tmp > 0 && rslt.length < count) {
              rslt.push(`${tmp}${unitName[i]}`);
          }
      }
      return rslt.join(' ') || '0';
  }
});
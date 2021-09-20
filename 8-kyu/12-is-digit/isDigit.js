String.prototype.digit = function() {
    const regex = /^\[0-9]{1,}/
    return regex.test(this);
  };

console.log('14b'.digit());
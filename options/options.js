const packageName = () => ({
  type: 'input',
  name: 'packageName',
  message: 'Please input package name...',
  validate(val) {
    if (val) return true;
    return 'Please input package name...';
  },
});

export { packageName };

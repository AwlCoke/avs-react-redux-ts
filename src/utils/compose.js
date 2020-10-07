// eslint-disable-next-line no-unused-vars

const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((wrapped, func) => func(wrapped), comp);
};

export default compose;

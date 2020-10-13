// eslint-disable-next-line no-unused-vars

const compose = (...funcs: any) => (comp: any) => {
    return funcs.reduceRight((wrapped: any, func: any) => func(wrapped), comp);
};

export default compose;

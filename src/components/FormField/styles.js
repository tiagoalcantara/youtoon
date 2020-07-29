import styled from 'styled-components';

export const FieldWrapper = styled.div`
    width: 60%;
    margin: 0 auto;

    border: 1px solid var(--greyLight);
`

export const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 100%;
    top: 36px;
    z-index: 1;

    transition: all .3s ease-in-out;

    &.filled {
        top: 0;
        font-size: 0.8em;
    }
`

export const TextArea = styled.textarea`
    position: relative;
    width: 100%;

    padding: 16px 8px 4px 8px;
    margin: 16px 0;

    z-index: 10;
    background: transparent;

    border: none;
    border-bottom: 2px solid white;
    color: white;

    display: inline-block;

    resize: none;
    height: 200px;
`

export const InputField = styled.input`
    margin: 16px 0;

    &[type="text"]{
        position: relative;
        width: 100%;

        padding: 16px 8px 4px 8px;
        

        z-index: 10;
        background: transparent;

        border: none;
        border-bottom: 2px solid white;
        color: white;
        

        display: inline-block;
    }

    &[type="color"]{
        width: 100%;
        height: 50px;
        background: var(--grayMedium);
        border: none;

        display: inline-block;
    }
`
import {css} from "lit-element"
export const generalStyles = css `

.container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15;
    padding-top: 20;
}

.grid-column-12{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 15px;
}

.grid-column-8{
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    column-gap: 15px;
}

.grid-column-6{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 15px;
}

.grid-column-4{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 15px;
}

.grid-column-2{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
}

.grid-column-1{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 15px;
}
`;
import {css} from "lit-element"
export const buttonStyle = css `

    .button-primary{
        background-color: #9ebe1d;
        border: none;
        color: white;
        padding: 10px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        border-radius: 5px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif

    }
    .button-primary:hover{
        box-shadow: 0px 6px 8px 0 rgb(0,0,0,0.24)

    }

    .button-primary:disabled,

    .button-primary[disabled]{
        background-color: #cccccc;
        color: black;
        pointer-event: none;
    }
    /* --default */
    .button-default{
        background-color: #F3EFEE
        border: none;
        color: black;
        padding: 10px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        border-radius: 5px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif

    }
    .button-default:hover{
        box-shadow: 0px 6px 8px 0 rgb(0,0,0,0.24)

    }

    .button-default:disabled,

    .button-default[disabled]{
        background-color: #cccccc;
        color: #f6f6f6f;
        pointer-event: none;
    }
/* -----blue */
.button-blue{
        background-color: #73D0FB;
        border: none;
        color: black;
        padding: 10px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        border-radius: 5px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif

    }
    .button-blue:hover{
        box-shadow: 0px 6px 8px 0 rgb(0,0,0,0.24)

    }

    .button-blue:disabled,

    .button-blue[disabled]{
        background-color: #cccccc;
        color: #f6f6f6f;
        pointer-event: none;
    }
/* ---warning */
.button-warning{
        background-color: #F71906;
        border: none;
        color: black;
        padding: 10px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        border-radius: 5px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif

    }
    .button-warning:hover{
        box-shadow: 0px 6px 8px 0 rgb(0,0,0,0.24)

    }

    .button-warning:disabled,

    .button-warning[disabled]{
        background-color: #cccccc;
        color: #f6f6f6f;
        pointer-event: none;
    }
/* --disabled */
    .button-disabled{
        background-color: #cccccc;
        color: #f6f6f6f;
        pointer-event: none;
        padding: 10px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        border-radius: 5px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif

    }
    .button-disabled:hover{
        box-shadow: 0px 6px 8px 0 rgb(0,0,0,0.24)

    }
`;
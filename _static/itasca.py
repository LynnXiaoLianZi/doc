from pygments.style import Style
from pygments.token import Keyword, Name, Comment, String, Error, \
     Number, Operator, Generic

class ItascaStyle(Style):
    default_style = ""
    styles = {
        Comment:                '#808080',
        Keyword:                'bold #660099',
        Name:                   '#000000',
        Name.Builtin:           'bold #000000',
        Name.Function:          'bold #660099',
        Name.Class:             'bold #000000',
        Name.Entity:            '#9966FF',
        String:                 '#269900',
        String.Other:           '#269900',
        String.Symbol:          'bold #48D987',
        String.Escape:          'bold #ff0000',
        Operator:               '#000000',
        Number.Double:          '#0000ff',
        Number.Integer:         '#0000ff',
    }
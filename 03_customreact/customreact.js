function customrender(reactelement,root)
{
    // const domelement=document.createElement(reactelement.type)
    // domelement.innerHTML=reactelement.children,
    // domelement.setAttribute('href',reactelement.props.href),
    // domelement.setAttribute('target',reactelement.props.target),
    // root.append(domelement)
    const domelement=document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    for(const prop in reactelement.props)
        {
            if(prop==='children') continue
            domelement.setAttribute(prop,reactelement.props[prop])
        }
    root.append(domelement)
}

const reactelement=
{
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}


const root=document.getElementById('root');
customrender(reactelement,root);
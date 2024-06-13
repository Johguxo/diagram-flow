import { Tree, TreeNode } from 'react-organizational-chart'
import './../App.css'
import Title from './Title'
import TitleOrange from './TitleOrange'

function EjemploLibreria() {

  return (
    <>
      <Tree label={<TitleOrange name='Consejo directivo'/> } lineColor="#0e147b" lineWidth='2px'>
        <TreeNode label={<Title name='Oficina de Tecnologias de la Informacion'/>}>
          <TreeNode label={<Title name='Area de desarollo de talento'/>} />
          <TreeNode label={<Title name='Area de administracion de personal'/>} />
          <TreeNode label={<Title name='Area de clima, cultura y comunicacion interna'/>} >
            <TreeNode label={<Title name='Unidad de Finanzas'/>} />
            <TreeNode label={<Title name='Unidad de Finanzas'/>} />
            <TreeNode label={<Title name='Area de administracion de personal'/>} />
          </TreeNode>
        </TreeNode>
        <TreeNode label={<Title name='Oficina de Recursos Humanos'/>}>
          <TreeNode label={<Title name='Area de infraestructura tecnologica'/>} />
          <TreeNode label={<Title name='Area de ifnromatica y sitemas'/>} />
        </TreeNode>
        <TreeNode label={<Title name='Oficina de adminsitracion y finanzas'/>}>
          <TreeNode label={<Title name='Unidad de abastecimiento'/>} >
            <TreeNode label={<Title name='Unidad de Finanzas'/>} />
            <TreeNode label={<Title name='Unidad de Finanzas'/>} />
          </TreeNode>
          <TreeNode label={<Title name='Unidad de Finanzas'/>} />
        </TreeNode>
      </Tree>
    </>
  )
}

export default EjemploLibreria

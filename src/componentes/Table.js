import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NOME</td>
                            <td>MARCA</td>
                            <td>MODELO</td>
                            <td>Sistema Operacional</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.arrayInfo.map(
                                row =>
                                    <tr key={row.idEquipamento}>
                                        <td>{row.idEquipamento}</td>
                                        <td>{row.nomeEquipamento}</td>
                                        <td>{row.marca}</td>
                                        <td>{row.modelo}</td>
                                        <td>{row.sistemaOperacional}</td>
                                        <td>{row.statusEquipamento}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
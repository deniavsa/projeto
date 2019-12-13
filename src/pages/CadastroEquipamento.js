import React, { Component } from 'react';
import '../assets/css/cadastroequipamento.css';
import iconeUser from '../assets/img/user.png';
import iconeLaptop from '../assets/img/laptop.png';
import iconeFile from '../assets/img/file.png';
import iconeCat from '../assets/img/categorias.png';
import iconeLogout from '../assets/img/logout.png';
import temaDeFundo from '../assets/img/semtitulo.png';
class CadastroEquipamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeEquipamento: '',
            marca: '',
            modelo: '',
            sistemaOperacional: '',
            polegada: '',
            processador: '',
            memoriaRam: '',
            ssd: '',
            hd: '',
            placaDeVideo: '',
            alimentacao: '',
            peso: '',
            dimensoes: '',
            // statusEquipamento: '',
            // idCategoria: '',
        }
        this.cadastrarEquipamento = this.cadastrarEquipamento.bind(this);
        this.atualizaEstadoNomeEquipamento = this.atualizaEstadoNomeEquipamento.bind(this);
        this.atualizaEstadoMarca = this.atualizaEstadoMarca.bind(this);
        this.atualizaEstadoModelo = this.atualizaEstadoModelo.bind(this);
        this.atualizaEstadoSistemaOperacional = this.atualizaEstadoSistemaOperacional.bind(this);
        this.atualizaEstadoPolegada = this.atualizaEstadoPolegada.bind(this);
        this.atualizaEstadoProcessador = this.atualizaEstadoProcessador.bind(this);
        this.atualizaEstadoMemoriaRam = this.atualizaEstadoMemoriaRam.bind(this);
        this.atualizaEstadoSSD = this.atualizaEstadoSSD.bind(this);
        this.atualizaEstadoHD = this.atualizaEstadoHD.bind(this);
        this.atualizaEstadoPlacaDeVideo = this.atualizaEstadoPlacaDeVideo.bind(this);
        this.atualizaEstadoAlimentacao = this.atualizaEstadoAlimentacao.bind(this);
        this.atualizaEstadoPeso = this.atualizaEstadoPeso.bind(this);
        this.atualizaEstadoDimensoes = this.atualizaEstadoDimensoes.bind(this);
        // this.atualizaEstadoStatusEquipamento = this.atualizaEstadoStatusEquipamento.bind(this);
        // this.atualizaEstadoIdCategoria = this.atualizaEstadoIdCategoria.bind(this)
    }
    atualizaEstadoNomeEquipamento(event) {
        this.setState({ nomeEquipamento: event.target.value })
    }
    atualizaEstadoMarca(event) {
        this.setState({ marca: event.target.value })
    }
    atualizaEstadoModelo(event) {
        this.setState({ modelo: event.target.value })
    }
    atualizaEstadoSistemaOperacional(event) {
        this.setState({ sistemaOperacional: event.target.value })
    }
    atualizaEstadoPolegada(event) {
        this.setState({ polegada: event.target.value })
    }
    atualizaEstadoProcessador(event) {
        this.setState({ processador: event.target.value })
    }
    atualizaEstadoMemoriaRam(event) {
        this.setState({ memoriaRam: event.target.value })
    }
    atualizaEstadoSSD(event) {
        this.setState({ ssd: event.target.value })
    }
    atualizaEstadoHD(event) {
        this.setState({ hd: event.target.value })
    }
    atualizaEstadoPlacaDeVideo(event) {
        this.setState({ placaDeVideo: event.target.value })
    }
    atualizaEstadoAlimentacao(event) {
        this.setState({ alimentacao: event.target.value })
    }
    atualizaEstadoPeso(event) {
        this.setState({ peso: event.target.value })
    }
    atualizaEstadoDimensoes(event) {
        this.setState({ dimensoes: event.target.value })
    }
    // atualizaEstadoStatusEquipamento(event) {
    //     this.setState({ statusEquipamento: event.target.value })
    // }
    // atualizaEstadoIdCategoria(event) {
    //     this.setState({ idCategoria: event.target.value })
    // }
    cadastrarEquipamento(event) {
        event.preventDefault();
        fetch('https://localhost:5001/api/Equipamento', {
            method: 'POST',
            body: JSON.stringify({
                nomeEquipamento: this.state.nomeEquipamento,
                marca: this.state.marca,
                modelo: this.state.modelo,
                sistemaOperacional: this.state.sistemaOperacional,
                polegada: this.state.polegada,
                processador: this.state.processador,
                memoriaRam: this.state.memoriaRam,
                ssd: this.state.ssd,
                hd: this.state.hd,
                placaDeVideo: this.state.placaDeVideo,
                alimentacao: this.state.alimentacao,
                peso: this.state.peso,
                dimensoes: this.state.dimensoes,
                // statusEquipamento: this.state.statusEquipamento,
                // idCategoria: this.state.idCategoria,
            }),
            headers: { 'Content-type': 'application/json' }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('Cadastro de usuário concluído com sucesso')
                }
            })
    }
    render() {
        return (
            <div>
                <body style={{
                    backgroundImage: "url(" + temaDeFundo + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    background: "cover",
                    backgroundSize: "100%, 100%"
                }}>
                    <header class="fixed">
                        <div id="menu_header_lateral_esquerda_adm">
                            <div id="icon_menu_header_adm"><i class="fas fa-bars"></i></div>

                            <div id="campo_busca_header_adm">
                                <i id="icon_campo_busca_header_adm" class="fas fa-search"></i>
                                <form action="">
                                    <input type="text" value="" placeholder="Buscar equipamento" />
                                </form>
                            </div>
                        </div>
                        <div id="menu_header_lateral_direita_adm">
                            <p>Denilson Santos</p>
                            <div id="img_menu_header_adm">
                                <p>V</p>
                            </div>
                        </div>
                    </header>
                    <main id="conteudo_adm">
                        <nav id="menu_lateral_esquerda_adm">
                            <div class="identificador_menu_lateral_adm">
                                <div class="identificador_menu_lateral_cor_adm"></div>
                                <div class="icon_menu_lateral_adm">
                                    <img src={iconeUser} />
                                </div>
                            </div>
                            <div class="icon_menu_lateral_adm">
                                <img src={iconeLaptop} />
                            </div>
                            <div class="icon_menu_lateral_adm">
                                <img src={iconeFile} />
                            </div>
                            <div class="icon_menu_lateral_adm">
                                <img src={iconeCat} />
                            </div>
                            <div class="icon_menu_lateral_adm">
                                <img src={iconeLogout} />
                            </div>
                        </nav>
                        <section id="conteudo_tela_lateral_direita_adm" style={{
                            backgroundImage: "url(" + temaDeFundo + ")",
                        }}>
                            <div id="cabecalho_corpo_adm" style={{
                                backgroundImage: "url(" + temaDeFundo + ")",
                            }}>
                                <p>Equipamento</p>
                            </div>
                            <div id="corpo_conteudo_adm">
                                <div id="limitacao_espaco_corpo_conteudo_adm">
                                    <form onSubmit={this.cadastrarEquipamento}>
                                        <label type="text">Nome do equipamento:</label>
                                        <input type="text"
                                            value={this.state.nomeEquipamento}
                                            onChange={this.atualizaEstadoNomeEquipamento}
                                            placeholder="Nome do equipamento"
                                        />
                                        <label type="text">Marca:</label>
                                        <input type="text" value={this.state.marca}
                                            onChange={this.atualizaEstadoMarca}
                                            name=""
                                            id=""
                                            placeholder="Marca"
                                        />
                                        <label type="text">Modelo:</label>
                                        <input type="text"
                                            value={this.state.modelo}
                                            onChange={this.atualizaEstadoModelo}
                                            placeholder="Modelo"
                                        />
                                        <label type="text">Sistema Operacional:</label>
                                        <input type="text"
                                            value={this.state.sistemaOperacional}
                                            onChange={this.atualizaEstadoSistemaOperacional}
                                            placeholder="Sistema Operacional"
                                        />
                                        <label type="text">Polegada:</label>
                                        <input type="text" value={this.state.polegada}
                                            onChange={this.atualizaEstadoPolegada}
                                            placeholder="Polegada"
                                        />
                                        <label type="text">Processador:</label>
                                        <input type="text" value={this.state.processador}
                                            onChange={this.atualizaEstadoProcessador}
                                            placeholder="Processador"
                                        />
                                        <label type="text">Memoria RAM:</label>
                                        <input type="text" value={this.state.memoriaRam}
                                            onChange={this.atualizaEstadoMemoriaRam}
                                            placeholder="Memoria RAM"
                                        />
                                        <label type="text">SSD:</label>
                                        <input type="text" value={this.state.ssd}
                                            onChange={this.atualizaEstadoSSD}
                                            placeholder="SSD"
                                        />
                                        <label type="text">HD:</label>
                                        <input type="text" value={this.state.hd}
                                            onChange={this.atualizaEstadoHD}
                                            placeholder="HD"
                                        />
                                        <label type="text">Placa de video:</label>
                                        <input type="text" value={this.state.placaDeVideo}
                                            onChange={this.atualizaEstadoPlacaDeVideo}
                                            placeholder="Placa de video"
                                        />
                                        <label type="text">Alimentação:</label>
                                        <input type="text" value={this.state.alimentacao}
                                            onChange={this.atualizaEstadoAlimentacao}
                                            placeholder="Alimentação"
                                        />
                                        <label type="text">Peso:</label>
                                        <input type="text" value={this.state.peso}
                                            onChange={this.atualizaEstadoPeso}
                                            placeholder="Peso"
                                        />
                                        <label type="text">Dimensões:</label>
                                        <input type="text" value={this.state.dimensoes}
                                            onChange={this.atualizaEstadoDimensoes}
                                            placeholder="Dimensões"
                                        />
                                        {/* <label type="text">Status do Equipamento:</label>
                                        <input type="text" value={this.state.statusEquipamento}
                                            onChange={this.atualizaEstadoStatusEquipamento}
                                            placeholder="Status do Equipamento"
                                        /> */}
                                        {/* <label type="text">ID da categoria:</label>
                                        <input type="text" value={this.state.idCategoria}
                                            onChange={this.atualizaEstadoIdCategoria}
                                            placeholder="ID da categoria"
                                        /> */}
                                        <button type="submit" onClick="cadastrarEquipamento()" id="entrar-5-login">Cadastrar</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </main>
                </body>
            </div>
        )
    }
}

export default CadastroEquipamento;
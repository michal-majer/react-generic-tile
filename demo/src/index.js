import React, {Component} from 'react';
import {render} from 'react-dom';
import {MdCancel, MdChat, MdCheck} from 'react-icons/md';
import {FiUsers} from 'react-icons/fi';
import KPI from '../../lib';

class Demo extends Component {
  state = {
    loading: false
  }

  render() {
    return <div>
      <h1>react-generic-tile Demo</h1>
      <div style={{ display: 'flex'}}>
        <KPI
          header={"Jessica Daniell"}
          subheader={"Senior Consultant, Department Sales & Distribution"}
          loading={this.state.loading}
          number={"65.5"}
          scale={"MM"}
          color={"Good"}
          indicator={"Up"}
          onClick={() => this.setState({loading: !this.state.loading})}
          footer={"Test"}
        />

        <KPI
          icon={<MdChat size={36}/>}
          loading={this.state.loading}
          number={"Chat"}
        />

        <KPI
          icon={<FiUsers size={28} />}
          color={"Good"}
          number={"3942"}
          header={"Aktywni kursanci"}
          loading={this.state.loading}
        />

        <KPI
          header={"Jessica Danielle Johnson"}
          subheader={"Senior Consultant, Department Sales & Distribution"}
          loading={this.state.loading}
          number={"65.5"}
          scale={"MM"}
          color={"Bad"}
          indicator={"Down"}
          footer={"This is Sparta! This is Sparta!"}
        />

        <KPI
          header={"Jessica Danielle Johnson"}
          subheader={"Senior Consultant, Department Sales & Distribution"}
          loading={this.state.loading}
          number={"65.5"}
          scale={"MM"}
          color={"Warning"}
          indicator={"Down"}
          footer={"This is Sparta! This is Sparta!"}
        />

        <KPI
          header={"Jessica Danielle Johnson"}
          subheader={"Senior Consultant, Department Sales & Distribution"}
          loading={!this.state.loading}
          number={"5"}
          // scale={"MM"}
          // color={"#bb0000"}
          // indicator={"Down"}
          icon={<MdChat size={28} color="#8FB4D3"/>}
          footer={"This is Sparta! This is Sparta!"}
        />

        <KPI
          header={"Jessica Danielle Johnson"}
          subheader={"Senior Consultant, Department Sales & Distribution"}
          loading={!this.state.loading}
          number={"TEST"}
          // scale={"MM"}
          // color={"#bb0000"}
          // indicator={"Down"}
          icon={<MdChat size={28} color="#8FB4D3"/>}
          footer={"This is Sparta! This is Sparta!"}
        />

        <KPI loading={!this.state.loading} />
      </div>
      <div style={{ display: 'flex'}}>
        <KPI
          size={"Small"}
          icon={<FiUsers size={28} />}
          color={"Good"}
          number={"3942"}
          header={"Aktywni kursanci"}
          loading={this.state.loading}
        />
      </div>
      <button onClick={() => this.setState({loading: !this.state.loading})}>Zmień ładowanie</button>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

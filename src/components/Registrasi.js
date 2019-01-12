import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import { Input, TextLink, Loading, Button } from './common';
import axios from 'axios';
import deviceStorage from '../services/deviceStorage';

class Registrasi extends Component {
  constructor(props){
    super(props);
    this.state = {
      nama: '',
      namapengguna:'',
      email: '',
      password: '',
      registrasi: '',
      error: '',
      loading: false
    };

    this.registrasiPengguna = this.registrasiPengguna.bind(this);
    this.gagalRegistrasi = this.gagalRegistrasi.bind(this);
  }

  registrasiPengguna() {
    const { nama, namapengguna, email, password, registrasi } = this.state;

    this.setState({ error: '', loading: true });
    axios.post("http://localhost:3000/api/auth/registrasi",{ body : 
      {
        nama: nama,
        namapengguna: namapengguna,
        email: email,
        password: password,
        registrasi: registrasi
      }
    }
    )
    .then((response) => {
      // deviceStorage.saveKey("id_token", response.data.jwt);
      // this.props.newJWT(response.data.jwt);
    })
    .catch((error) => {
      console.log(error);
      this.gagalRegistrasi();
    });
  }

  gagalRegistrasi(errors) {
    this.setState({
      error: "gagal",
      loading: false
    });
  }

  render() {
    const { nama, namapengguna, email, password, aturan, registrasi, error, loading } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="Nama Lengkap"
              label="Nama Lengkap"
              value={nama}
              onChangeText={nama => this.setState({ nama })}
            />
          </View>
          <View style={section}>
            <Input
              placeholder="Nama Pengguna"
              label="Nama Pengguna"
              value={namapengguna}
              onChangeText={namapengguna => this.setState({ namapengguna })}
            />
          </View>
          <View style={section}>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="Masukan kata Sandi"
              label="Kata Sandi"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <View style={section}>
            <Input
              placeholder="Status Registrasi"
              label="Registrasi"
              value={registrasi}
              onChangeText={registrasi => this.setState({ registrasi })}
            />
          </View>

          <Text style={errorTextStyle}>
            {error}
          </Text>

          {!loading ?
            <Button onPress={this.registrasiPengguna}>
              Register
            </Button>
            :
            <Loading size={'large'} />
          }
        </View>
        <TextLink onPress={this.props.authSwitch}>
          Sudah Memiliki Akun ? Masuk!
        </TextLink>
      </Fragment>
    );
  }
}

const styles = {
  form: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  section: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
};

export { Registrasi };
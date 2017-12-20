import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
// import styles from './App.css';
import TextInput from 'rax-textinput';
import ListView from 'rax-listview';

let listData = [];

for (let i = 100; i >= 0; i--) {
  listData.push({
    name: 'tom' + i
  });
}

const styles = {
  container: {
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    flex: 1
  },
  title: {
    margin: 50
  },
  text: {
    fontSize: 28,
    color: '#000000',
    fontSize: 28,
    padding: 40
  },
  item1: {
    height: 110,
    backgroundColor: '#909090',
    marginBottom: 3
  },
  item2: {
    height: 110,
    backgroundColor: '#e0e0e0',
    marginBottom: 3
  },
  loading: {
    padding: 50,
    textAlign: 'center',
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      data: listData
    };
  }

  listHeader = () => {
    return (
      <View style={styles.title}>
        <Text style={styles.text}>列表头部</Text>
      </View>
    );
  }
  listLoading = () => {
    if (this.state.index < 4) {
      return (
        <View style={styles.loading}>
          <Text style={styles.text}>加载中...</Text>
        </View>
      );
    } else {
      return null;
    }
  }
  listItem = (item, index) => {
    if (index % 2 == 0) {
      return (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.item2}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      );
    }
  }
  handleLoadMore = () => {
    setTimeout(() => {
      this.state.index++;
      if (this.state.index < 5) {
        this.state.data.push(
          {name1: 'loadmore 2'},
          {name1: 'loadmore 3'},
          {name1: 'loadmore 4'},
          {name1: 'loadmore 5'},
          {name1: 'loadmore 2'},
          {name1: 'loadmore 3'},
          {name1: 'loadmore 4'},
          {name1: 'loadmore 5'}
        );
      }
      this.setState(this.state);
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
      <ListView
        renderHeader={this.listHeader}
        renderFooter={this.listLoading}
        renderRow={this.listItem}
        dataSource={this.state.data}
        onEndReached={this.handleLoadMore}
      />
      </View>
    );
  }

  // render() {
  //   return (
  //     <View style={styles.app} onAppear={(ev) => {
  //       console.log('appear');
  //     }} onDisappear={(ev) => {
  //       console.log('disappear');
  //     }}>
  //       <View style={styles.appHeader}>
  //         <Text style={styles.appBanner} onPress={() => console.log('pressed')}>Welcome to Rax</Text>
  //       </View>
  //       <TextInput
  //           placeholder={'Enter text to see events'}
  //           autoFocus multiline
  //           onFocus={() => console.log('onFocus')}
  //           onBlur={() => console.log('onBlur')}
  //           onInput={() => console.log('onInput')}
  //           style={{
  //             width: 750,
  //             height: 200,
  //             borderColor: '#000',
  //             borderWidth: 1,
  //             paddingTop: 10,
  //             paddingLeft: 0
  //           }}
  //         />
  //       <Text style={styles.appIntro}>
  //         To get started, edit src/App.js and save to reload.
  //       </Text>
  //     </View>
  //   );
  // }
}

export default App;

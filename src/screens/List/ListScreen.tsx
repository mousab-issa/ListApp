import React, { FC, useState, useEffect, useCallback } from 'react';
import { TouchableOpacity, View, Text, FlatList, ActivityIndicator, } from 'react-native';

import { useDispatch } from 'react-redux';
import { useAppSelector } from 'src/store/hooks';
import { getAllRepos } from 'src/store/selectors';
import { LogOut } from 'src/store/Auth/actions';
import { fetchUsers, searchUsers } from 'src/store/RepoList/actions';
import ListItem from './components/ListItem/ListItem';
import SearchBar from './components/searchBar/SearchBar';
import styles from './styles';
import { Props } from './types';

const ListScreen: FC<Props> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const users = useAppSelector(getAllRepos);
  const currPage = useAppSelector(state => state.Users.page);
  const usersLoading = useAppSelector(state => state.Users.loading);

  const [word, setWord] = useState<string>('');

  useEffect(
    () => {
      const search = setTimeout(() => {
        dispatch(searchUsers({ query: word, page: currPage }));
      }, 700);
      return () => {
        clearTimeout(search);
      };
    },
    [word]
  );


  const onEndScroll = useCallback(() => {
    let timer: any;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (!usersLoading) {
        dispatch(fetchUsers({ query: word, page: currPage }))
      }
    }, 500);
  }, [word]);

  const renderItemComponent = ({ item }: any) => {
    const { owner: { avatar_url, type }, name } = item;
    const onItemPress = (item: any) => {
      navigation.navigate('Details', { item })
    }
    return (
      <ListItem
        avatar_url={avatar_url}
        name={name}
        type={type}
        onItemClick={() => onItemPress(item)} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar onChangeText={(t) => setWord(t)} />
      </View>
      <FlatList
        data={users}
        renderItem={item => renderItemComponent(item)}
        keyExtractor={(item: any, index: number) => index.toString()}
        refreshing={usersLoading}
        onEndReached={onEndScroll}
      />
      {usersLoading && <ActivityIndicator />}

    </View >
  )
}

export default ListScreen;




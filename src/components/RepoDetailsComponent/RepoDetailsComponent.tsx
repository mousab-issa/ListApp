import React, { FC, } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { theme } from 'src/common/theme/theme';
import { Link } from 'src/components';

interface RepoProps {
  name: string;
  stars: number;
  link: string,
  avatar: string;
  type: string;
}

const RepoDetailsComponent: FC<RepoProps> = ({ name, link, stars, avatar, type }) => {

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar,
          }}
        />
      </View>
      <Text style={styles.header1}>{name.toUpperCase()}</Text>
      <Text style={styles.subtitle}>{type}</Text>
      <Text style={{ ...styles.subtitle, color: theme.Colors.error, fontWeight: 'bold' }}>Stars Count {stars}</Text>

      <Link url={link} children="Link to Repo" />

    </View>
  );
};

export default RepoDetailsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center'
  },
  avatarContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    marginVertical: 20,

  },
  header1: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    color: "grey"
  }
});

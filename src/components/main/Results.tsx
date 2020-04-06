import React from 'react';
import {
  StyleSheet, TouchableOpacity,
} from 'react-native';
import {
  Avatar, Card,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';


const BaniResult = ( props ) => {
  const styling = props.theme;
  const { gurmukhi, ID } = props.result;
  const { isAdded, onPress } = props;

  return (
        <TouchableOpacity
            onPress={onPress}
            >
            <Card.Title
                style={[ style.Card,
                  { borderRadius: styling.roundness, backgroundColor: isAdded ? styling.colors.backdrop : styling.colors.surface } ]}
                titleStyle={style.CardTitle}
                title={`${gurmukhi}`}
                subtitle={`Bani ID: ${ID}`}
                left={( properties ) => <Avatar.Icon {...properties} icon="book" />}
                right={() => ( isAdded ? <Icon name="check" /> : null ) }

            />
        </TouchableOpacity>
  );
};
export { BaniResult };

const SearchResult = ( props ) => {
  const styling = props.theme;
  const { isAdded, onPress } = props;
  const { verse, shabadId } = props.result;

  return (
        <TouchableOpacity
            onPress={onPress }>
            <Card.Title
                style={[ style.Card,
                  { borderRadius: styling.roundness, backgroundColor: isAdded ? styling.colors.backdrop : styling.colors.surface } ]}
                titleStyle={style.CardTitle}
                title={`${verse.gurmukhi}`}
                subtitle={`Shabad ID: ${shabadId}`}
                left={( properties ) => <Avatar.Icon {...properties} icon="book" />}
                right={() => ( isAdded ? <Icon name="check" /> : null ) }
            />
        </TouchableOpacity>
  );
};

export { SearchResult };

const style = StyleSheet.create( {
  Card: {
    margin: 5,
  },
  CardTitle: {
    fontFamily: 'AnmolLipiTrue',
  },
} );

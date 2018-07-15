import gql from 'graphql-tag';

export default gql`
mutation Mesage($to: String!, $body: String!) {
    createTodo(to: $to, body: $body) {
        __typename
        body
        to
        from
        sentAt
    }
}`;

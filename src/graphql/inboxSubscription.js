import gql from 'graphql-tag';

export default gql`
subscription Inbox($to: String) {
    inbox(to: $to) {
		from
		to
        body
    }
}`;

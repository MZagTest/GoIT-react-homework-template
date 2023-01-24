import user from 'data/user.json';
import { Profile } from './zad1-profile/Profile';
import data from 'data/data.json';
import { Stats } from './zad2-stats/Stats';
import friends from 'data/friends.json';
import { Friends } from './zad3-friendslist/Friends';
import transactions from 'data/transactions.json';
import { Transactions } from './zad4-transactions/Transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Stats title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
};

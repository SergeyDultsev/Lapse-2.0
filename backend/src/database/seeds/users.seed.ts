import { UserEntity } from '@resources/user/entites/user.entity';
import * as bcrypt from 'bcrypt';
import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';

export class UsersSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const userRepository = dataSource.getRepository(UserEntity);

    const hashedPassword = await bcrypt.hash('password', 10);

    const users = [
      {
        username: 'richard_hendricks',
        email: 'richard@lapse.com',
        bio: 'CEO of Pied Piper. Compression is my life.',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJCo4AH60LiM22ir19Cwblp4FBVZiUXhHQiCJPTOxp-w&s=10',
      },
      {
        username: 'erlich_bachman',
        email: 'erlich@lapse.com',
        bio: 'Aviato founder. Technically, I am a billionaire.',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZHKvoZ83hM06jQgoLZu1XHPhynh8RMOLGGxrQE7ar6Vzh1s-mhtvhoxf&s=10',
      },
      {
        username: 'dinesh_chugtai',
        email: 'dinesh@lapse.com',
        bio: 'Best coder at Pied Piper. Definitely not Gilfoyle.',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2il5YEc_h_WLpf5Tz3AVH8hHSfdCVjJ94m7q3VltVivIZD51kTHWuyqo&s=10',
      },
      {
        username: 'bertram_gilfoyle',
        email: 'gilfoyle@lapse.com',
        bio: 'Systems architect. Satanist. LaVeyan, to be precise.',
        avatarUrl:
          'https://decider.com/wp-content/uploads/2017/06/gilfoyle.jpg?quality=80&strip=all&w=978&h=652&crop=1',
      },
      {
        username: 'jared_dunn',
        email: 'jared@lapse.com',
        bio: 'Operations at Pied Piper. Former Hooli employee.',
        avatarUrl:
          'https://static.wikia.nocookie.net/silicon-valley/images/8/8f/Jared-dunn.png/revision/latest?cb=20240310101128',
      },
      {
        username: 'monica_hall',
        email: 'monica@lapse.com',
        bio: 'Partner at Raviga Capital.',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUp3piQgoQVxLmnGoNYjjtNggSOwQMTMZ5Qm5U401WtsxqXB7Z7kcXrBI&s=10',
      },
      {
        username: 'big_head',
        email: 'bighead@lapse.com',
        bio: 'Just a guy who was at the right place at the right time.',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-FKf3echsXNJ_kl7aknsAVy9Acp-RlXescfC43Slsg&s=10',
      },
      {
        username: 'gavin_belson',
        email: 'gavin@lapse.com',
        bio: 'CEO of Hooli. Making the world a better place.',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbEKZBdZfLBbmTSQxrBPkCGIb3OR6g_yItQvrZA2Ll-GBT6qF4jp0vcHi&s=10',
      },
      {
        username: 'jian_yang',
        email: 'jianyang@lapse.com',
        bio: 'Not hotdog.',
        avatarUrl:
          'https://beam-images.warnermediacdn.com/2025-07/jian-yang-1920.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com',
      },
      {
        username: 'russ_hanneman',
        email: 'russ@lapse.com',
        bio: 'This guy fucks. Billionaire investor.',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8fxViB_S_Mi_1YukfhgJW7E-B8L6627Wc4u5pI3Y7w&s=10',
      },
      {
        username: 'laurie_bream',
        email: 'laurie@lapse.com',
        bio: 'Managing partner at Raviga Capital.',
        avatarUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhQaLJa9yi1seh_fktWg_fQD4p5AdKvo_JAPfxRqRww&s=10',
      },
    ];

    await userRepository.save(
      users.map((user) =>
        userRepository.create({
          ...user,
          password: hashedPassword,
        }),
      ),
    );
  }
}

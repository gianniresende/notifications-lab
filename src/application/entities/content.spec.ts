import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');
    expect(content).toBeTruthy();
  });
  it('should not be able to create a notification content with length less than 5 caracters', () => {
    expect(() => new Content('Voc')).toThrow;
  });
  it('should not be able to create a notification content with length more than 240 caracters', () => {
    expect(() => new Content('v'.repeat(241))).toThrow;
  });
});
